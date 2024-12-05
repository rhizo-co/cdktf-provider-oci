# `identityDomainsApprovalWorkflow` Submodule <a name="`identityDomainsApprovalWorkflow` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsApprovalWorkflow <a name="IdentityDomainsApprovalWorkflow" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow oci_identity_domains_approval_workflow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  max_duration: IdentityDomainsApprovalWorkflowMaxDuration,
  name: str,
  schemas: typing.List[str],
  approval_workflow_steps: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowApprovalWorkflowSteps]] = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  description: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowTags]] = None,
  timeouts: IdentityDomainsApprovalWorkflowTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#idcs_endpoint IdentityDomainsApprovalWorkflow#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.maxDuration">max_duration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a></code> | max_duration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#name IdentityDomainsApprovalWorkflow#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#schemas IdentityDomainsApprovalWorkflow#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.approvalWorkflowSteps">approval_workflow_steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]]</code> | approval_workflow_steps block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attributes IdentityDomainsApprovalWorkflow#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attribute_sets IdentityDomainsApprovalWorkflow#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#authorization IdentityDomainsApprovalWorkflow#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#description IdentityDomainsApprovalWorkflow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#ocid IdentityDomainsApprovalWorkflow#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#resource_type_schema_version IdentityDomainsApprovalWorkflow#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#idcs_endpoint IdentityDomainsApprovalWorkflow#idcs_endpoint}.

---

##### `max_duration`<sup>Required</sup> <a name="max_duration" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.maxDuration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a>

max_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#max_duration IdentityDomainsApprovalWorkflow#max_duration}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#name IdentityDomainsApprovalWorkflow#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#schemas IdentityDomainsApprovalWorkflow#schemas}.

---

##### `approval_workflow_steps`<sup>Optional</sup> <a name="approval_workflow_steps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.approvalWorkflowSteps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]]

approval_workflow_steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#approval_workflow_steps IdentityDomainsApprovalWorkflow#approval_workflow_steps}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attributes IdentityDomainsApprovalWorkflow#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attribute_sets IdentityDomainsApprovalWorkflow#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#authorization IdentityDomainsApprovalWorkflow#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#description IdentityDomainsApprovalWorkflow#description}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#ocid IdentityDomainsApprovalWorkflow#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#resource_type_schema_version IdentityDomainsApprovalWorkflow#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#tags IdentityDomainsApprovalWorkflow#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#timeouts IdentityDomainsApprovalWorkflow#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putApprovalWorkflowSteps">put_approval_workflow_steps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putMaxDuration">put_max_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetApprovalWorkflowSteps">reset_approval_workflow_steps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_approval_workflow_steps` <a name="put_approval_workflow_steps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putApprovalWorkflowSteps"></a>

```python
def put_approval_workflow_steps(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowApprovalWorkflowSteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putApprovalWorkflowSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]]

---

##### `put_max_duration` <a name="put_max_duration" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putMaxDuration"></a>

```python
def put_max_duration(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putMaxDuration.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#unit IdentityDomainsApprovalWorkflow#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putMaxDuration.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}.

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#create IdentityDomainsApprovalWorkflow#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#delete IdentityDomainsApprovalWorkflow#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#update IdentityDomainsApprovalWorkflow#update}.

---

##### `reset_approval_workflow_steps` <a name="reset_approval_workflow_steps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetApprovalWorkflowSteps"></a>

```python
def reset_approval_workflow_steps() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsApprovalWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsApprovalWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsApprovalWorkflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsApprovalWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsApprovalWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.approvalWorkflowSteps">approval_workflow_steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList">IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList">IdentityDomainsApprovalWorkflowIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList">IdentityDomainsApprovalWorkflowIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.maxDuration">max_duration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference">IdentityDomainsApprovalWorkflowMaxDurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList">IdentityDomainsApprovalWorkflowMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList">IdentityDomainsApprovalWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference">IdentityDomainsApprovalWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.approvalWorkflowStepsInput">approval_workflow_steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.maxDurationInput">max_duration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_workflow_steps`<sup>Required</sup> <a name="approval_workflow_steps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.approvalWorkflowSteps"></a>

```python
approval_workflow_steps: IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList">IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList</a>

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsApprovalWorkflowIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList">IdentityDomainsApprovalWorkflowIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsApprovalWorkflowIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList">IdentityDomainsApprovalWorkflowIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_duration`<sup>Required</sup> <a name="max_duration" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.maxDuration"></a>

```python
max_duration: IdentityDomainsApprovalWorkflowMaxDurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference">IdentityDomainsApprovalWorkflowMaxDurationOutputReference</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.meta"></a>

```python
meta: IdentityDomainsApprovalWorkflowMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList">IdentityDomainsApprovalWorkflowMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tags"></a>

```python
tags: IdentityDomainsApprovalWorkflowTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList">IdentityDomainsApprovalWorkflowTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.timeouts"></a>

```python
timeouts: IdentityDomainsApprovalWorkflowTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference">IdentityDomainsApprovalWorkflowTimeoutsOutputReference</a>

---

##### `approval_workflow_steps_input`<sup>Optional</sup> <a name="approval_workflow_steps_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.approvalWorkflowStepsInput"></a>

```python
approval_workflow_steps_input: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowApprovalWorkflowSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `max_duration_input`<sup>Optional</sup> <a name="max_duration_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.maxDurationInput"></a>

```python
max_duration_input: IdentityDomainsApprovalWorkflowMaxDuration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsApprovalWorkflowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a>]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsApprovalWorkflowApprovalWorkflowSteps <a name="IdentityDomainsApprovalWorkflowApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps(
  type: str,
  value: str,
  ocid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#type IdentityDomainsApprovalWorkflow#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#ocid IdentityDomainsApprovalWorkflow#ocid}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#type IdentityDomainsApprovalWorkflow#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#ocid IdentityDomainsApprovalWorkflow#ocid}.

---

### IdentityDomainsApprovalWorkflowConfig <a name="IdentityDomainsApprovalWorkflowConfig" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  max_duration: IdentityDomainsApprovalWorkflowMaxDuration,
  name: str,
  schemas: typing.List[str],
  approval_workflow_steps: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowApprovalWorkflowSteps]] = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  description: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowTags]] = None,
  timeouts: IdentityDomainsApprovalWorkflowTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#idcs_endpoint IdentityDomainsApprovalWorkflow#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.maxDuration">max_duration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a></code> | max_duration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#name IdentityDomainsApprovalWorkflow#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#schemas IdentityDomainsApprovalWorkflow#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.approvalWorkflowSteps">approval_workflow_steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]]</code> | approval_workflow_steps block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attributes IdentityDomainsApprovalWorkflow#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attribute_sets IdentityDomainsApprovalWorkflow#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#authorization IdentityDomainsApprovalWorkflow#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#description IdentityDomainsApprovalWorkflow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#ocid IdentityDomainsApprovalWorkflow#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#resource_type_schema_version IdentityDomainsApprovalWorkflow#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#idcs_endpoint IdentityDomainsApprovalWorkflow#idcs_endpoint}.

---

##### `max_duration`<sup>Required</sup> <a name="max_duration" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.maxDuration"></a>

```python
max_duration: IdentityDomainsApprovalWorkflowMaxDuration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a>

max_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#max_duration IdentityDomainsApprovalWorkflow#max_duration}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#name IdentityDomainsApprovalWorkflow#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#schemas IdentityDomainsApprovalWorkflow#schemas}.

---

##### `approval_workflow_steps`<sup>Optional</sup> <a name="approval_workflow_steps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.approvalWorkflowSteps"></a>

```python
approval_workflow_steps: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowApprovalWorkflowSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]]

approval_workflow_steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#approval_workflow_steps IdentityDomainsApprovalWorkflow#approval_workflow_steps}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attributes IdentityDomainsApprovalWorkflow#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attribute_sets IdentityDomainsApprovalWorkflow#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#authorization IdentityDomainsApprovalWorkflow#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#description IdentityDomainsApprovalWorkflow#description}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#ocid IdentityDomainsApprovalWorkflow#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#resource_type_schema_version IdentityDomainsApprovalWorkflow#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#tags IdentityDomainsApprovalWorkflow#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsApprovalWorkflowTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#timeouts IdentityDomainsApprovalWorkflow#timeouts}

---

### IdentityDomainsApprovalWorkflowIdcsCreatedBy <a name="IdentityDomainsApprovalWorkflowIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedBy()
```


### IdentityDomainsApprovalWorkflowIdcsLastModifiedBy <a name="IdentityDomainsApprovalWorkflowIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedBy()
```


### IdentityDomainsApprovalWorkflowMaxDuration <a name="IdentityDomainsApprovalWorkflowMaxDuration" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#unit IdentityDomainsApprovalWorkflow#unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#unit IdentityDomainsApprovalWorkflow#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}.

---

### IdentityDomainsApprovalWorkflowMeta <a name="IdentityDomainsApprovalWorkflowMeta" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMeta()
```


### IdentityDomainsApprovalWorkflowTags <a name="IdentityDomainsApprovalWorkflowTags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#key IdentityDomainsApprovalWorkflow#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#key IdentityDomainsApprovalWorkflow#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}.

---

### IdentityDomainsApprovalWorkflowTimeouts <a name="IdentityDomainsApprovalWorkflowTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#create IdentityDomainsApprovalWorkflow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#delete IdentityDomainsApprovalWorkflow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#update IdentityDomainsApprovalWorkflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#create IdentityDomainsApprovalWorkflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#delete IdentityDomainsApprovalWorkflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#update IdentityDomainsApprovalWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList <a name="IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowApprovalWorkflowSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]]

---


### IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference <a name="IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.resetOcid">reset_ocid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.resetOcid"></a>

```python
def reset_ocid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsApprovalWorkflowApprovalWorkflowSteps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>]

---


### IdentityDomainsApprovalWorkflowIdcsCreatedByList <a name="IdentityDomainsApprovalWorkflowIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference <a name="IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedBy">IdentityDomainsApprovalWorkflowIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsApprovalWorkflowIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedBy">IdentityDomainsApprovalWorkflowIdcsCreatedBy</a>

---


### IdentityDomainsApprovalWorkflowIdcsLastModifiedByList <a name="IdentityDomainsApprovalWorkflowIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference <a name="IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedBy">IdentityDomainsApprovalWorkflowIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsApprovalWorkflowIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedBy">IdentityDomainsApprovalWorkflowIdcsLastModifiedBy</a>

---


### IdentityDomainsApprovalWorkflowMaxDurationOutputReference <a name="IdentityDomainsApprovalWorkflowMaxDurationOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsApprovalWorkflowMaxDuration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a>

---


### IdentityDomainsApprovalWorkflowMetaList <a name="IdentityDomainsApprovalWorkflowMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsApprovalWorkflowMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsApprovalWorkflowMetaOutputReference <a name="IdentityDomainsApprovalWorkflowMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMeta">IdentityDomainsApprovalWorkflowMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsApprovalWorkflowMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMeta">IdentityDomainsApprovalWorkflowMeta</a>

---


### IdentityDomainsApprovalWorkflowTagsList <a name="IdentityDomainsApprovalWorkflowTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsApprovalWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsApprovalWorkflowTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]]

---


### IdentityDomainsApprovalWorkflowTagsOutputReference <a name="IdentityDomainsApprovalWorkflowTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsApprovalWorkflowTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>]

---


### IdentityDomainsApprovalWorkflowTimeoutsOutputReference <a name="IdentityDomainsApprovalWorkflowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_approval_workflow

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsApprovalWorkflowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a>]

---



